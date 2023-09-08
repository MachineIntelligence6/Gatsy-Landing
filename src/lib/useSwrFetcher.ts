import useSWR from 'swr'




export function useSwrFetcher<T = unknown>(fetchId: string, fetcher: () => Promise<T>) {
    const { data, error, isLoading } = useSWR<T>(fetchId, () => fetcher())
    return { data, error, isLoading }
}

