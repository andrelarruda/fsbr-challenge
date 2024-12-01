import ProductForm from "../../../../components/product/Form";
import { useGetProductByIdQuery } from '../../../../services/apiSlice';
import { useParams } from 'react-router-dom'

export default function UpdateProductPage() {
    const params = useParams()
    const idFromParams = params.id
    const { data } = useGetProductByIdQuery(parseInt(idFromParams ?? '0'))

    return (
        <ProductForm product={data} isUpdate={true} />
    )
}