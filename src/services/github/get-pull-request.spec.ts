import axios from "axios"
import { getPullRequest, IParams } from './get-pull-request'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('getPullRequest', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return formatted response', async () => {
    const mockResponse: any = { data: {} }
    mockedAxios.get.mockResolvedValue(mockResponse)

    const params: IParams = {
      username: 'pwillikins',
      project: 'g-list',
      number: '1'
    }
    const response = await getPullRequest(params)

    const expectedReqUrl = `https://api.github.com/repos/${params.username}/${params.project}/pulls/${params.number}`
    expect(axios.get).toHaveBeenCalledWith(expectedReqUrl)
    expect(response.pull).toBeDefined()
    expect(response.commits).toBeDefined()
  })
})