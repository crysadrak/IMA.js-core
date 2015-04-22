import ns from 'imajs/client/core/namespace.js';
import bootstrap from 'imajs/client/core/bootstrap.js';

bootstrap.addComponent((utils) => {


	ns.namespace('App.Page.Detail');
	/**
	 * Detail Page view.
	 *
	 * @class View
	 * @extends React.Component
	 * @namespace App.Page.Detail
	 * @module App
	 * @submodule App.Page
	 *
	 * @uses App.Component.Layout.Header.View
	 * @uses App.Component.Feed.Item.View
	 */
	class View extends React.Component {

		constructor(props) {
			super(props);

			this.state = props;
		}

		render() {
			var Header = ns.App.Component.Header.View;

			var entity = this.state.item;
			var category = this.state.category;
			var item = this.getItem(entity, category);
			var moreItemsButton = this.getMoreItemButton();
			
			return (
				<div className='l-detailpage'>
					<Header/>
					<div className='detail'>
						{item}
						{moreItemsButton}
					</div>
				</div>
			);
		}

		getItem(entity, category) {

			if (entity && category) {
				var FeedItem = ns.App.Component.FeedItem.View;

				return (
					<FeedItem
						key={'item'+entity.getId()}
						entity={entity}
						category={category}
						singleItem='true'
						sharedItem={entity} />
				);
			}
			return '';
		}

		getMoreItemButton() {
			var buttonTitle = utils.$Dictionary.get('detail.moreItemsButtonTitle');
			var link = utils.$Dictionary.get('detail.moreItemsButtonLink');

			return <a href={link} id='more-items-button' className='more-items button'>{buttonTitle}</a>
		}
	}
	
	ns.App.Page.Detail.View = View;
});


