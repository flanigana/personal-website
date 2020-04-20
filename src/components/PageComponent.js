import React, { Component } from 'react';
import ParseHTML from 'html-react-parser';

const HeaderOffset = 48;

class PageComponent extends Component {
    constructor(props) {
        super(props);
        this.divRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: props.name,
            html: props.html,
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClick);
        if (window.location.pathname === `/${this.state.name}`) {
            this.scroll();
        }
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick);
    }

    handleClick(e) {
        if (e && (e.target.localName === "a")) {
            if (e.target.innerHTML.toLowerCase() === this.state.name) {
                this.scroll();
            }
        }
    }

    scroll() {
        const DivTop = this.divRef.current.offsetTop;
        const Offset = DivTop - HeaderOffset;
        window.scrollTo({ top: Offset, left: 0, behavior: 'smooth' });
    }

    render() {
        return (
            <>
            <div id={`${this.state.name}-page`} className="page-component" ref={this.divRef}>
                {ParseHTML(this.state.html)}
            </div>
            </>
        )
    }
}

export default PageComponent;