import * as React from 'react';

export interface INovoComponentProps { name: string; }

class NovoComponent extends React.Component<INovoComponentProps> {
    public render() {
        return (
            <div>
                <h1>{ this.props.name }</h1>
            </div>
        );
    }
}

export default NovoComponent;
