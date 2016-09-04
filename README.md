# Image Search Abstraction Layer
API to find data from image searches


By Greg Perlman

##User Stories:

  >  1. I can get the image URLs, alt text and page urls for a set of images relating to a given search string.
  >  2. I can paginate through the responses by adding a ?offset=2 parameter to the URL.
  >  3. I can get a list of the most recently submitted search strings.

## To make a search:

Add a valid date or unix timestamp to the end of the query

<code>https://boiling-beyond-48849.herokuapp.com/search/jumanji</code>
<br>
<code>https://boiling-beyond-48849.herokuapp.com/search/jumanji?offset=2</code>

## To see recent searches:

<code>
  https://boiling-beyond-48849.herokuapp.com/recentSearches
</code>


###Live Site:

https://boiling-beyond-48849.herokuapp.com/
