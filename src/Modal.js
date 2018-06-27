import React from 'react';
import { Result } from './components/result';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: '',
      visible: false,
      results: [],
    }

    this.closeModal = this.closeModal.bind(this);
    this.changeKeyword = this.changeKeyword.bind(this);
    this.emptyKeyword = this.emptyKeyword.bind(this);
    this.executeSearch = this.executeSearch.bind(this);
  }

  closeModal(event) {
    event.preventDefault();
    this.props.connectedKeywordDOM.value = this.state.keyword;
    this.setState({visible: false, keyword: ''});
  }

  emptyKeyword(event) {
    event.preventDefault();
    this.setState({keyword: ''});
  }

  changeKeyword(event) {
    this.setState({keyword: event.target.value});
  }

  executeSearch(event) {
    event.preventDefault();
    this.setState({
      results: [
        {id: 1, title: 'something', url:'https://example.jp', description: 'hogehogehogehogehogehogehogehoge'}
      ]
    });
  }

  render() {
    return (
      <div className={this.state.visible ? 'lz-modal lz-ignore is-active' : 'lz-modal lz-ignore'} data-lz-modal>
        <div className="lz-background"></div>
        <div className="lz-front">
          <div className="lz-search-block">

            <div className="lz-header">
              <form>
                <div className="lz-search">
                  <div className={this.state.keyword === '' ? 'lz-search-form' : 'lz-search-form has-keyword'}>
                    <input name="keyword" type="text" className="lz-keyword" value={this.state.keyword} onChange={this.changeKeyword} />
                    <button type="submit" className="lz-button" onClick={this.executeSearch}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.08 19.6">
                        <defs>
                          <style>
                            {`.a{fill:#fff;}.b{fill:none;stroke:#fff;stroke-miterlimit:10;}`}
                          </style>
                        </defs>
                        <title>loupe</title>
                        <path className="a" d="M10.91,4A6.91,6.91,0,1,1,4,10.91,6.92,6.92,0,0,1,10.91,4m0-1a7.91,7.91,0,1,0,7.91,7.91A7.91,7.91,0,0,0,10.91,3Z" transform="translate(-3 -3)"/>
                        <line className="b" x1="12.62" y1="13.15" x2="18.72" y2="19.25"/>
                      </svg>
                    </button>
                    <button type="button" className="lz-x" onClick={this.emptyKeyword}>×</button>
                  </div>
                  <a href="#" className="lz-close" onClick={this.closeModal}>close</a>
                </div>
              </form>
            </div>

            <div className="lz-body">
              <div className="lz-results">
                {this.state.results.map((result) => {
                  return <Result key={result.id} url={result.url} title={result.title} description={result.description} />
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
