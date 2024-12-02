import { Button, Form, Input, Typography } from 'antd'
import { z } from 'zod'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../../../services/apiSlice';
import { ShowToast, ToastType } from '../../../utils/toast/Toast';


const { Title } = Typography;


const loginFormSchema = z.object({
    email: z.string().min(1, 'O documento CPF/CNPJ é obrigatório'),
    password: z.string().min(6, 'A senha deve ter no minino 6 caracteres')
})

type FieldType = {
    email?: string;
    password?: string;
};

export const LoginForm = () => {
    const navigate = useNavigate()
    const [ login ] = useLoginMutation()

    return (
        <Form
            name='basic'
            layout='horizontal'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 800, }}
            onFinish={(data) => {
                login(data)
                    .unwrap()
                    .then((data) => {
                        const accessToken = data?.accessToken
                        // localStorage.setItem('token', accessToken) 
                        ShowToast(ToastType.SUCCESS, 'Usuario logado com sucesso.')
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error)
                        ShowToast(ToastType.ERROR, 'Dados inválidos.')
                    })
            }}
            onFinishFailed={() => { alert('Algo deu errado.') }}
            autoComplete='off'
        >
            <Title level={2} style={{ alignSelf: 'center' }}>Faça seu login</Title>

            <Form.Item<FieldType>
                label="Email"
                name="email"
                rules={[
                    { required: true, message: 'Por favor digite seu email.' },
                    { type: 'email', message: "Digite um email válido" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item<FieldType>
                label="Senha"
                name="password"
                rules={[
                    { required: true, message: 'Por favor digite sua senha.' },
                    { min: 6, message: "Digite pelo menos 6 caracteres." },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item label={null}>
                <Button type="primary" htmlType="submit">
                    Entrar
                </Button>
            </Form.Item>
            {/* <Button type="link" htmlType="submit" >
                Criar uma conta
            </Button> */}
            <Form.Item label={null}>
                <NavLink to='/signup' end>
                    Criar uma conta
                </NavLink>
            </Form.Item>
        </Form>
    )
}