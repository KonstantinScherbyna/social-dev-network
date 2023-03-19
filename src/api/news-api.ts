import { createApi, fetchBaseQuery, setupListeners } from '@reduxjs/toolkit/query/react'
import store from '../redux/redux-store-toolkit'
import { INewsResult } from '../types/types'

// const key = 'bmIr7Haa13rViJrYsTQxtH5ztNsPAKla'
debugger

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
                // url: 'svc/news/v3/content/all/all.json',
                // params: 'bmIr7Haa13rViJrYsTQxtH5ztNsPAKla',
            }
        })
    })
})


export const { useGetNewsQuery } = newsAPI