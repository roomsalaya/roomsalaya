declare module 'react-modal' {
    import { ComponentType, ReactNode, CSSProperties } from 'react';

    export interface ModalProps {
        isOpen: boolean;
        onRequestClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
        contentLabel?: string;
        style?: {
            content?: CSSProperties;
            overlay?: CSSProperties;
        };
        portalClassName?: string;
        overlayClassName?: string | object;
        className?: string | object;
        bodyOpenClassName?: string;
        htmlOpenClassName?: string;
        ariaHideApp?: boolean;
        shouldFocusAfterRender?: boolean;
        shouldCloseOnOverlayClick?: boolean;
        shouldReturnFocusAfterClose?: boolean;
        parentSelector?: () => HTMLElement;
        aria?: {
            [key: string]: string;
        };
        role?: string;
        contentElement?: (props: object, children: ReactNode) => HTMLElement;
        overlayElement?: (props: object, contentEl: HTMLElement) => HTMLElement;
        id?: string;
        testId?: string;
        children?: ReactNode;
    }

    const Modal: ComponentType<ModalProps>;

    export function setAppElement(element: string | HTMLElement): void;

    export default Modal;
}
