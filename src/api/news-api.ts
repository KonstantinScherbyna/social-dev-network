import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { INewsResult } from '../types/types'

export const newsAPI = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/' }),
    endpoints: (build) => ({
        getNews: build.query<INewsResult, { apikey: string, date: string }>({
            query: (data) => {
                let { apikey, date } = data
                return {
                    url: `v2/everything`,
                    params: {
                        'q': 'technologies',
                        'from': date,
                        'sortBy': 'popularity',
                        'apiKey': apikey
                    }
                }
            }
        })
    })
})


export const { useGetNewsQuery } = newsAPI