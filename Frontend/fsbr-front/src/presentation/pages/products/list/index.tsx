import { useDeleteProductMutation, useGetProductsQuery } from "../../../../services/apiSlice";
import { Button, List, Skeleton, Divider, Typography } from 'antd';
import { DeleteFilled, EditFilled, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import { IconText } from "../../../../components/icons/IconText";
import { ShowToast, ToastType } from '../../../../utils/toast/Toast';

const { Title } = Typography;

export default function ListProductsPage() {
    const { data, error, isLoading, refetch } = useGetProductsQuery()
    const [pageSize, setPageSize] = useState(10)
    const navigate = useNavigate()
    const [ deleteProduct ] = useDeleteProductMutation()

    useEffect(() => {
        refetch()
    }, []);
    
    return (
        <div className="flex h-full justify-center items-center text-white text-xl" 
            >
            {error ? (
                <>Erro ao listar categorias.</>
            ) : (
                <List
                    className='demo-loadmore-list'
                    // style={{ backgroundColor: 'red', minHeight: '80vh'}}
                    itemLayout='horizontal'
                    dataSource={data}
                    header={
                        <Divider orientation='left' orientationMargin={0} style={{ marginTop: 0, paddingTop: 0 }}>
                            <Title level={3}>Produtos</Title>
                            <Button type='primary' onClick={() => navigate('/products/create')}>
                                <PlusOutlined />
                                Criar produto
                            </Button>
                        </Divider>
                    }
                    pagination={{
                        onChange: (page) => {
                            console.log(page)
                        },
                        pageSize,
                        align: 'center',
                    }}
                    loading={isLoading}
                    renderItem={
                        (item) => (
                            <List.Item
                                actions={[
                                    <a onClick={(event) => {
                                        navigate(`/products/update/${item.id}`)
                                    }}><IconText icon={EditFilled} text="editar" key="list-vertical-star-o" /></a>,
                                    <a onClick={(event) => {
                                        deleteProduct(item.id)
                                            .unwrap()
                                            .then(() => {
                                                ShowToast(ToastType.SUCCESS, 'Produto excluído com sucesso.')
                                                refetch()
                                            })
                                            .catch((e) => {
                                                ShowToast(ToastType.ERROR, 'Erro ao excluir produto.')
                                                console.log(`Erro ao deletar produto: ${e.data?.errors?.Description}`)
                                            })
                                    }}><IconText icon={DeleteFilled} text="excluir" key="list-vertical-star-o" /></a>,
                                ]}
                            >
                                <Skeleton avatar title={false} loading={false} active>
                                    <List.Item.Meta
                                        title={item.name}
                                        description={item.description}
                                    />
                                </Skeleton>
                            </List.Item>
                        )}>
                </List>
            )}
        </div>
    )
}