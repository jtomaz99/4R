import React from 'react';  

class Popup extends React.Component {  
  render() {  
	return (  
		<div class="modal" tabindex="-1" role="dialog">
			  <div class="modal-dialog" role="document">
				<div class="modal-content">
					  <div class="modal-header">
						   <h5 class="modal-title">Alerta para detalhes:</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
							  <span aria-hidden="true">&times;</span>
						</button>
					  </div>
					  <div class="modal-body">
						<p>{this.props.text}</p>
					 </div>
					  <div class="modal-footer">
						<button type="button" class="btn btn-primary" data-dismiss="modal" onClick={this.props.closePopup} >Fechar </button>
					 </div>
				</div>
			  </div>
		
		 </div>
		
		);  
		}  
		}  

export default Popup;