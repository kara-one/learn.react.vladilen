import './Modal.css';

import React from 'react';

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render(h) {
        return (
            <React.Fragment>
                <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

                {this.state.isOpen && <div className='modal'>
                    <div className='modal-body'>
                        <h1>Modal title</h1>
                        <p>Hello</p>
                        <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
                    </div>
                </div>}
            </React.Fragment>
        )
    }
}
