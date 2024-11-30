import { Button, List, Skeleton, Space, Divider, Typography } from 'antd';
import { useGetCategoriesQuery, } from '../../../../services/apiSlice';
import React, { useEffect, useState } from 'react';
import Icon, { DeleteFilled, DeleteOutlined, EditFilled, FileAddFilled, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const { Title } = Typography;

export default function ListCategoriesPage() {
    const { data, error, isLoading, refetch } = useGetCategoriesQuery();
    const [currentPage, setCurrentPage] = useState<number>(1)
    const navigate = useNavigate()

    useEffect(() => {
        refetch()
    }, []);

    return (
        <div className="flex h-full justify-center items-center text-white text-xl">
            {error ? (
                <>Erro ao listar categorias.</>
            ) : (
                <List
                    className='demo-loadmore-list'
                    // loading={initLoading}
                    itemLayout='horizontal'
                    dataSource={data}
                    header={
                        <Divider orientation='left' orientationMargin={0} style={{ marginTop: 0, paddingTop: 0 }}>
                            <Title level={3}>Categorias</Title>
                            <Button type='primary' onClick={() => navigate('/categories/create')}>
                                <PlusOutlined />
                                Criar categoria
                            </Button>
                        </Divider>
                    }
                    pagination={{
                        onChange: (page) => {
                            setCurrentPage(page);
                        },
                        pageSize: 10,
                        align: 'center',
                    }}
                    loading={isLoading}
                    renderItem={
                        (item) => (
                            <List.Item
                                actions={[
                                    <a onClick={(event) => {
                                        console.log('editing: ', item.id)
                                    }}><IconText icon={EditFilled} text="edit" key="list-vertical-star-o" /></a>,
                                    <a onClick={(event) => {
                                        console.log('deleting: ', item.id)
                                        refetch()
                                    }}><IconText icon={DeleteFilled} text="delete" key="list-vertical-star-o" /></a>,
                                    // <DeleteFilled color='#ff3311' />,
                                ]}
                            // extra={<Button size='small'>Delete</Button>}
                            >
                                <Skeleton avatar title={false} loading={false} active>
                                    <List.Item.Meta
                                        // avatar={<FontAwesomeIcon icon='box' />}
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