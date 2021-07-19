import axios from 'axios'

interface PullsResponse {
  pulls: Array<any>,
  username: string,
  project: string
}

export const getRepoPulls = async (url: string): Promise<PullsResponse> => {
  const [username, project] = getDetailsFromUrl(url)

  const reqUrl = `https://api.github.com/repos/${username}/${project}/pulls`

  const response = await axios.get(reqUrl)

  return {
    pulls: response.data,
    username: username,
    project: project
  }
}

const getDetailsFromUrl = (url: string) => {
  return url.replace('https://github.com/', '').split('/')
}