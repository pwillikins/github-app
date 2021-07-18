import axios from 'axios'

export const getRepoPulls = async (url: string) => {
  const u = `https://api.github.com/repos/pwillikins/g-list/pulls`

  return await axios.get(u)
}