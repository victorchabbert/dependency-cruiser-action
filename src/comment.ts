import type {getOctokit} from '@actions/github'
import type {context} from '@actions/github'
import {title} from './shared'

type Repo = typeof context['repo']
type Pr = typeof context['payload']['pull_request']

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function fetchPreviousComment(octokit: ReturnType<typeof getOctokit>, repo: Repo, pr: NonNullable<Pr>) {
  const commentList = await octokit.issues.listComments({
    ...repo,
    issue_number: pr.number
  })

  return commentList.data.find(comment => comment?.body?.startsWith(title) ?? false)
}

export async function comment(
  octokit: ReturnType<typeof getOctokit>,
  repo: Repo,
  pr: NonNullable<Pr>,
  body: string
): Promise<void> {
  const previousComment = await fetchPreviousComment(octokit, repo, pr)

  if (previousComment === undefined) {
    try {
      await octokit.issues.createComment({
        ...repo,
        issue_number: pr.number,
        body
      })
    } catch (e) {
      console.log('Error creating comment')
    }
  } else {
    try {
      await octokit.issues.updateComment({
        ...repo,
        comment_id: previousComment.id,
        body
      })
    } catch (e) {
      console.log('Error updating comment')
    }
  }
}
