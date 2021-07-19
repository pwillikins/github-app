import axios from 'axios'

export const getRepoPulls = async (url: string) => {
  const [username, project] = getDetailsFromUrl(url)

  const reqUrl = `https://api.github.com/repos/${username}/${project}/pulls`

  return await axios.get(reqUrl)
}

const getDetailsFromUrl = (url: string) => {
  return url.replace('https://github.com/', '').split('/')
}