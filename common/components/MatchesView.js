// -----------------------------------------------------------------
// Presentational component for the example Matches page
// Written as an example during the initial Redux experimentation.
// Should be cleaned up and re-written 
// -----------------------------------------------------------------
import React, { PropTypes } from 'react'
import ModalButton from '../components/ModalButton'
import TryModalButton from '../components/TryModalButton'
import NewModalButton from '../components/NewModalButton'
import s from './MatchesView.scss';

const MatchesView = ({ status, list, post, onClickCb, fetchCb }) => (
  <div>
   Matches
   <p>{status}</p>
   {list &&
       <ul className="list-group">
          {list.map(item =>
            <li key={item.id} className="list-group-item" className={s.root}>
                <span className="badge">{item.username}</span>
                {item.name}
            </li>
          )}
       </ul>
   }
   
   <div className="well well-lg">{post? post.title : "nothing"}</div>
   <button type="button" onClick={onClickCb}>Click Me!</button>
   <ModalButton />
   
   <button type="button" className="btn btn-info" data-toggle="modal" data-target="#dtModal">Data Target Modal</button>
   <DataTargetModal />

   <button type="button" className="btn btn-info" id="jsBtn" onClick={showJsModal}>JS Modal</button>
   <JSTargetModal />

   <TryModalButton />
   
   <NewModalButton fetchCB={fetchCb}/>
   <NewModalButton fetchCB={fetchCb}/>
   <NewModalButton fetchCB={fetchCb}/>

  </div>
)

MatchesView.propTypes = {
  status: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object.isRequired),
  post: PropTypes.object.isRequired,
  onClickCb: PropTypes.func.isRequired,
  fetchCb: PropTypes.func.isRequired
}

function showJsModal () {
    $("#jsModal").modal()
}

const DataTargetModal = React.createClass({
    
    render: function() {
            return (
                <div id="dtModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">

                     <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                      </div>
                      <div className="modal-body">
                        <p>Some text in the modal.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>
            )
    }
});

const JSTargetModal = React.createClass({
    
    render: function() {
            return (
                <div id="jsModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">

                     <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Modal Header</h4>
                      </div>
                      <div className="modal-body">
                        <p>Some text in the modal.</p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                      </div>
                    </div>

                  </div>
                </div>
            )
    }
});


export default MatchesView
