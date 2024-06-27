import { useState } from "react"
import Modal from "./modal";
import './modal.css';


export default function ModalTest(){

    const [showModal, setShowModal] = useState(false);

    const handleToggleModal = () => {
        setShowModal(!showModal);
    }

    const onClose = () => {
        setShowModal(false);
    }

    return <div>
        <button onClick={handleToggleModal}>Open Modal Popup</button>
        {
            showModal && <Modal onClose={onClose} body={<div>Custom Body</div>}/>
        }
    </div>
}