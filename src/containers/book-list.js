import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

const BookList = (props) => {
  const renderList = () => {
    return props.books.map(book => {
      return (
        <li
          key={book.title}
          onClick={() => props.selectBook(book)}
          className="list-group-item"
          >
        {book.title}
        </li>
      )
    });
  }
  
  return (
   <ul className='list-group col-cm-4'>
      {renderList()}
   </ul>
  );
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

function mapDispatchToProps(dispatch) {
  debugger;
  return bindActionCreators({selectBook: selectBook}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);
