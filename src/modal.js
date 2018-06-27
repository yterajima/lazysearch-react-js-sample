import React from 'react';
import { Header } from './components/header';
import { Result } from './components/result';

export default class Modal extends React.Component {
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

  changeKeyword() {
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
            <Header
              keyword={this.state.keyword}
              changeKeywordHandler={this.changeKeyword}
              searchHandler={this.executeSearch}
              emptyKeywordHandler={this.emptyKeyword}
              closeModal={this.closeModal}
            />
            <div className="lz-body">
              <div className="lz-results">
                {this.state.results.map((result) => {
                  return (
                    <Result
                      key={result.id}
                      url={result.url}
                      title={result.title}
                      description={result.description}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
