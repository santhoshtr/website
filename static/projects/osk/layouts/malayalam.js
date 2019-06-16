/* Malayalam keyboard layouts
 * contains layout: 'malayalam-inscript' 
 *
 * To use:
 *  Point to this js file into your page header: <script src="layouts/malayalam.js" type="text/javascript"></script>
 *  Initialize the keyboard using: $('input').keyboard({ layout: 'malayalam-inscript' });
 *
 * license for this file: WTFPL, unless the source layout site has a problem with me using them as a reference
 */

/* based on http://ascii-table.com/keyboard.php/480 & http://www.gate2home.com/?language=bn&sec=2 */
$.keyboard.layouts['malayalam-inscript'] = {
	'default' : [
		'` \u0d67 \u0d68 \u0d69 \u0d6a \u0d6b \u0d6c \u0d6d \u0d6e \u0d6f \u0d66 - \u0d43 {bksp}',
		'{tab} \u0d4c \u0d48 \u0d2e \u0d40 \u0d42 \u0d1c \u0d29 \u0d17 \u0d26 \u0d1c \u0d21 \u0d2c \\',
		'\u0d4b \u0d47 \u0d4d \u0d3f \u0d41 \u0d2a \u0d30 \u0d15 \u0d24 \u0d1a \u0d1f {enter}',
		'{shift} \u0d4e \u0982 \u0d2e \u0d28 \u0d2c \u0d22 \u0d28 , . \u0d5f {shift}',
		'{accept}  {space} {cancel}',
		'{layouts}'
	
	],
	'shift' : [
		"~ \u0d67 \u0d68 \u0d20 \u0d4d \u0d1c \u0d14 \u0d15 \u0d26 ( ) \u0983 \u0d43 {bksp}",
		"{tab} \u0d14 \u0d10 \u0986 \u0988 \u098a \u0d1d \u0d19 \u0d18 \u0d17 \u0d1d \u0d12 \u0d1e |",
		"\u0d13 \u0d0f \u0d05 \u0d07 \u0d09 \u0d2b \u0d31 \u0d16 \u0d25 \u0d1b \u0d20 {enter}",
		"{shift} ? \u0981 \u0d13 \u0d18 \u0d1c \u0d22 \u0d26 \u0d27 \u0964 \u0d1f {shift}",
		"{accept}  {space} {cancel}",
		'{layouts}'
	]
};
 
