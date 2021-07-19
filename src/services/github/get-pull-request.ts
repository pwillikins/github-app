import axios from 'axios'

export interface IParams {
  username: string,
  project: string,
  number: string
}

interface CommitsResponse {
  pull: any,
  commits: Array<any>
}

export const getPullRequest = async (params: IParams): Promise<CommitsResponse> => {
  const pullReqUrl = `https://api.github.com/repos/${params.username}/${params.project}/pulls/${params.number}`
  const commitsReqUrl = `https://api.github.com/repos/${params.username}/${params.project}/pulls/${params.number}/commits`

  const pullResponse = await axios.get(pullReqUrl)
  const commitsResponse = await axios.get(commitsReqUrl)

  return {
    pull: pullResponse.data,
    commits: commitsResponse.data
  }
}