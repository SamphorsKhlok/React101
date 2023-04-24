import React, {Component, createRef, RefObject, useRef} from "react";
import {createPortal} from 'react-dom';
import FocusTrap from "focus-trap-react";
import './Dialog.css';

type DialogComponentProps = {
    title: string;
    children: JSX.Element;
    onDialogClose: () => void;
}

const dialogRootElement = document.getElementById('dialog-root');

class Dialog extends Component<DialogComponentProps> {
    readonly dialogContainer: HTMLDivElement;
    readonly modalRef: RefObject<HTMLDivElement>;
    readonly focusableRef: RefObject<HTMLButtonElement>;
    constructor(props: DialogComponentProps) {
        super(props);
        this.dialogContainer = document.createElement('div');
        this.modalRef = createRef<HTMLDivElement>();
        this.focusableRef = createRef<HTMLButtonElement>();
    }

    componentDidMount() {
        if(dialogRootElement){
            dialogRootElement!.appendChild(this.dialogContainer);
            if (this.focusableRef.current) {
                this.focusableRef.current.focus();
            }
        }
    }

    componentWillUnmount() {
        if(dialogRootElement){
            dialogRootElement!.removeChild(this.dialogContainer);
        }
    }

    render() {

        return createPortal(
            <FocusTrap active={true} focusTrapOptions={{ clickOutsideDeactivates: true }}
                       containerElements={[this.modalRef.current as HTMLElement]}>
                <div ref={this.modalRef} className="dialogContainer">
                    <div className="dialogHeader">
                        <h2>{this.props.title}</h2>
                        <span><button ref={this.focusableRef}  tabIndex={-1} onClick={this.props.onDialogClose}>X</button></span>
                    </div>
                    <div className="dialogBody">{this.props.children}</div>
                </div>
            </FocusTrap>
            ,
            this.dialogContainer);
    }
}

export default Dialog;