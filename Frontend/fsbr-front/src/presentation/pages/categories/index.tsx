import { Flex } from 'antd'
import { useGetCategoriesQuery, } from '../../../services/category.service'
import { Category } from '../../../types/Category';
import { CustomList } from '../../../components/list/CustomList';

export default function ListCategoriesPage() {
    const { data, error, isLoading } = useGetCategoriesQuery();

    return (
        <div className="flex h-full justify-center items-center text-white text-xl">
            {error ? (
                <>Algo deu errado.</>
            ) : isLoading ? (
                <section>Carregando...</section>
            ) :
                (
                    <>
                    <CustomList>
                        <p></p>
                    </CustomList>
                    </>

                )}
        </div>
    )
}