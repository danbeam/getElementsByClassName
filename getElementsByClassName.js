/**
* getElementsByClassName
* @fileOverview  An easy way to find DOM Nodes with a specific class
* @author        Dan Beam <dan@danbeam.org>
* @param         {string} className - the class we're looking for on DOM Nodes
* @param         {element} startFrom (optional) - a point in the DOM to start from
* @return        {array} results - any DOM Nodes that have the specified class
*/

// if native support, use it (it "decimates" DOM parsing in the words of John Resig)
if ('function' !== typeof document.getElementsByClassName) {

	// NOTE: HTMLElement will work in pretty much everything IE6+, but IE6 DOM Nodes inherit directly from Object (lame, right?)
	('undefined' !== typeof HTMLElement ? HTMLElement : Object).prototype.getElementsByClassName = document.getElementsByClassName = function (testClass, startFrom) {

		for (	var	// this will be incremented to 0 at start of loop
				i = -1,
	
				// results of the DOM query (elements with matching class)
				results = [ ],
	
				// regular expression to see if the class attribute contains
				// the searched for class
				finder = new RegExp('(?:^|\\s)' + testClass+ '(?:\\s|$)'),
	
				// grab all DOM elements and the set's length
				a = startFrom && startFrom.getElementsByTagName && startFrom.getElementsByTagName('*') || document.all || document.getElementsByTagName('*'),

				// cache the length property
				l = a.length;
	
			// this is done before we start and at every comparison (note the ++)
			++i < l;
		
			// this is done after the first comparison and every iteration afterward
			finder.test(a[i].className) && results.push(a[i])

		);
	
		// do memory management and return the results of our query
		a = null; return results;

	};

}
