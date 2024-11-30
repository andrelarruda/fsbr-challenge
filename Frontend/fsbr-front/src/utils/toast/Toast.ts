import { message } from 'antd' 

export enum ToastType {
    SUCCESS,
    ERROR,
    INFO,
}

export const ShowToast = (type: ToastType, messageText: string ) => {
    switch (type){
        case ToastType.SUCCESS:
            message.open({
                type: 'success',
                content: messageText,
                style: {
                    fontSize: 18
                }
            });
            break
        case ToastType.INFO:
            message.open({
                type: 'error',
                content: messageText,
                style: {
                    fontSize: 18
                }
            });
            break
        case ToastType.ERROR:
            message.open({
                type: 'error',
                content: messageText,
                style: {
                    fontSize: 18
                }
            });
            break
    }
}