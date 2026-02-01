import { useForm } from "react-hook-form"
import { ISearchFormData } from "./search.interface"
import { useDebounce } from "@/hooks/useDebounce"
import { useMemo } from "react"

export const useSearchForm = () => {
    const {control, watch} = useForm<ISearchFormData>({
        mode: 'onChange'
    })

    const searchTerm = watch('searchTerm')
    const debouncedSearch = useDebounce(searchTerm, 500)

    return useMemo(
        () => ({debouncedSearch, searchTerm, control}), [searchTerm, debouncedSearch, control]
    )
} 