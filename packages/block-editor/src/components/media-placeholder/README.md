MediaPlaceholder
===========

`MediaPlaceholder` is a React component used to render either the media associated with a block, or an editing interface to replace the media for a block.

## Usage

An example usage which sets the URL of the selected image to `theImage` attributes.

```
const { MediaPlaceholder } = wp.editor;

...

	edit: ( { attributes, setAttributes } ) {
		const mediaPlaceholder = <MediaPlaceholder
			onSelect = {
				( el ) => {
					setAttributes( { theImage: el.url } );
				}
			}
			allowedTypes = { [ 'image' ] }
			multiple = { false }
			labels = { { title: 'The Image' } }
		>
			"extra content"
		</MediaPlaceholder>;
		...
	}
```

## Props

### accept

A string passed to `FormFileUpload` that tells the browser which file types can be upload to the upload window the browser use e.g: `image/*,video/*`.
More information about this string is available in https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_file_type_specifiers.
This property is similar to the `allowedTypes` property. The difference is the format and the fact that this property affects the behavior of `FormFileUpload` while `allowedTypes` affects the behavior `MediaUpload`.

- Type: `String`
- Required: No

### addToGallery

If true, and if  `gallery === true` the gallery media modal opens directly in the media library where the user can add additional images. When uploading/selecting files on the placeholder, the placeholder appends the files to the existing files list.
If false the gallery media modal opens in the edit mode where the user can edit existing images, by reordering them, remove them, or change their attributes. When uploading/selecting files on the placeholder the files replace the existing files list.

- Type: `Boolean`
- Required: No
- Default: `false`

### allowedTypes

Array with the types of the media to upload/select from the media library.
Each type is a string that can contain the general mime type e.g: `image`, `audio`, `text`,
or the complete mime type e.g: `audio/mpeg`, `image/gif`.
If allowedTypes is unset all mime types should be allowed.
This property is similar to the `accept` property. The difference is the format and the fact that this property affects the behavior of `MediaUpload` while `accept` affects the behavior `FormFileUpload`.

- Type: `Array`
- Required: No

### className

Class name added to the placeholder.

- Type: `String`
- Required: No

### icon

Icon to display left of the title. When passed as a `String`, the icon will be resolved as a [Dashicon](https://developer.wordpress.org/resource/dashicons/). Alternatively, you can pass in a `WPComponent` such as `BlockIcon`to render instead.

- Type: `String|WPComponent`
- Required: No

### isAppender

If true, the property changes the look of the placeholder to be adequate to scenarios where new files are added to an already existing set of files, e.g., adding files to a gallery.
If false the default placeholder style is used.

- Type: `Boolean`
- Required: No
- Default: `false`

### labels

An object that can contain a `title` and `instructions` properties. These properties are passed to the placeholder component as `label` and `instructions` respectively.

- Type: `Object`
- Required: No


### multiple

Whether to allow multiple selection of files or not.

- Type: `Boolean`
- Required: No
- Default: `false`

### onError

Callback called when an upload error happens.

- Type: `Function`
- Required: No

### onSelect

Callback called when the files are selected/uploaded.
The call back receives an array with the new files. Each element of the collection is an object containing the media properties of the file e.g.: `url`, `id`,...

- Type: `Function`
- Required: Yes

### value

Media ID (or media IDs if multiple is true) to be selected by default when opening the media library.

- Type: `Number|Array`
- Required: No


## Extend

It includes a `wp.hooks` filter `editor.MediaPlaceholder` that enables developers to replace or extend it.

_Example:_

Replace implementation of the placeholder:

```js
function replaceMediaPlaceholder() {
	return function() {
		return wp.element.createElement(
			'div',
			{},
			'The replacement contents or components.'
		);
	}
}

wp.hooks.addFilter(
	'editor.MediaPlaceholder',
	'my-plugin/replace-media-placeholder',
	replaceMediaPlaceholder
);
```
