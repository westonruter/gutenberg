/**
 * External dependencies
 */
import classNames from 'classnames';

/**
 * WordPress dependencies
 */
import { URLPopover } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';
import {
	Button,
	IconButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { getIconBySite } from './social-list';

const SocialLinkEdit = ( { attributes, setAttributes, isSelected } ) => {
	const { url, site } = attributes;
	const [ showURLPopover, setPopover ] = useState( true );
	const classes = classNames(
		'wp-social-link',
		'wp-social-link-' + site,
		{ 'wp-social-link__is-incomplete': ( url ) ? false : true },
	);

	// Import icon.
	const IconComponent = getIconBySite( site );

	return (
		<Button
			className={ classes }
			onClick={ () => setPopover( true ) }
		>
			<IconComponent />
			{ isSelected && showURLPopover && (
				<URLPopover
					onClose={ () => setPopover( false ) }
				>
					<form onSubmit={ () => setPopover( false ) }>
						<input type="url"
							value={ url }
							onChange={ ( evt ) => setAttributes( { url: evt.target.value } ) }
							placeholder={ __( 'Enter site URL' ) }
						/>
						<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
					</form>
				</URLPopover>
			) }
		</Button>
	);
};

export default SocialLinkEdit;