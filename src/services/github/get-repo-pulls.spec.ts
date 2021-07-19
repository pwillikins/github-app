import axios from "axios"
import { getRepoPulls } from './get-repo-pulls'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>

describe('getRepoPulls', () => {

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return formatted response', async () => {
    const mockResponse: any = { data: [] }
    mockedAxios.get.mockResolvedValue(mockResponse)

    const url: string = 'https://github.com/pwillikins/g-list'
    const response = await getRepoPulls(url)

    const expectedReqUrl = 'https://api.github.com/repos/pwillikins/g-list/pulls'
    expect(axios.get).toHaveBeenCalledWith(expectedReqUrl)

    expect(response.pulls).toBe(mockResponse.data)
    expect(response.username).toBe('pwillikins')
    expect(response.project).toBe('g-list')
  })
})