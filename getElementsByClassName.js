/**
 * @author	Dan Beam, dan@danbeam.org
 * @internal	An easy way to find DOM Nodes with a specific class
 * @param	String:classToFind - the class we're looking for on DOM Nodes
 * @return	Array:results - any DOM Nodes that have the specified class
 */

function getElementsByClassName( className )
{
	// if native support, use it
	// (it "decimates" DOM parsing in the words of John Resig)
	if( 'function' === typeof document.getElementsByClassName )
	{
		return document.getElementsByClassName( className );
	}

	for // otherwise do it ourselves
	(
		var	// this will be incremented to 0 at start of loop
			i = -1,

			// results of the DOM query (elements with matching class)
			results = [ ],

			// regular expression to see if the class attribute contains
			// the searched for class
			finder = new RegExp( '(^|\\s)' + className + '(\\s|$)' ),

			// grab all DOM elements and the set's length
			a = document.all || document.getElementsByTagName('*'), len = a.length;

		// this is done before we start and at every comparison (note the ++)
		++i < len;

		// this is done after the first comparison and every iteration afterward
		finder.test( a[i].className ) && results.push( a[i] )
	);

	// do memory management and return the results of our query
	delete a; return results;
}
