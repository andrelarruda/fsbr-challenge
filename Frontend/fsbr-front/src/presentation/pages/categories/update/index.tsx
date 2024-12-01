import CategoryForm from "../../../../components/category/Form";
import { useGetCategoryByIdQuery } from '../../../../services/apiSlice';
import { useParams } from 'react-router-dom'

export default function UpdateCategoryPage() {
    const params = useParams()
    const idFromParams = params.id
    const { data } = useGetCategoryByIdQuery(parseInt(idFromParams ?? '0'))

    return (
        <CategoryForm category={data} isUpdate={true} />
    )
}