import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'
import Recipe from './Recipe'

const RecipeModal = (props) => {
	return(
		<Modal trigger={<Button>Get Recipe</Button>}>
	    <Modal.Header>Profile Picture</Modal.Header>
	    <Modal.Content image scrolling>
	      <Image
	        size='medium'
	        src='/assets/images/wireframe/image.png'
	        wrapped
	      />

	      <Modal.Description>
	        <Header>Modal Header</Header>
	        <p>This is an example of expanded content that will cause the modal's dimmer to scroll</p>
	        <Recipe data={props.data} />
	        
	      </Modal.Description>
	    </Modal.Content>
	    <Modal.Actions>
	      <Button primary>
	        Proceed <Icon name='right chevron' />
	      </Button>
	    </Modal.Actions>
    </Modal>
    )
}

export default RecipeModal