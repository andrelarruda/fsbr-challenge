import { Button, List, Skeleton, Space, Pagination } from 'antd';
import { useGetCategoriesQuery, } from '../../../services/category.service';
import React, { useEffect, useState } from 'react';
import Icon, { DeleteFilled, DeleteOutlined, EditFilled, FileAddFilled, PlusOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  );

export default function ListCategoriesPage() {
    const { data, error, isLoading, refetch } = useGetCategoriesQuery();
    const [currentPage, setCurrentPage] = useState<number>(1)

    return (
        <div className="flex h-full justify-center items-center text-white text-xl">
            { error ? (
                <>Algo deu errado.</>
            ) : (
                    <List 
                        className='demo-loadmore-list'
                        // loading={initLoading}
                        itemLayout='horizontal'
                        dataSource={data}
                        header={
                            <div>
                                <Button type='primary'>
                                    <PlusOutlined />
                                    Criar categoria
                                </Button>
                            </div>
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