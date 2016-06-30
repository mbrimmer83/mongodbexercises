# MongoDB Exercises

## Insert

Here are some of my favorite Jazz albums. Enter them into your Mongo database by writing insert statements. You can use a database of your choice, and you will use the collection named "albums".

Album Name: Lee Konitz/Bob Brookmeyer in Paris
Artist: Lee Konitz
Released: 1960
Duration: 56
Styles:
  * Cool
  * Bop

Album Name: Compact Jazz: Dizzy Gillespie
Artist: Dizzy Gillespie
Released: 1987
Duration: 56
Styles:
  * Bop

Album Name: Brasil
Artist: Joao Gilberto
Released: 1981
Duration: 28
Styles:
  * Brazil

Album Name: Gretchen Parlato
Artist: Gretchen Parlato
Released: 2005
Duration: 39
Styles:
  * Pop
  * Brazil

## Find

1. Find the albums whose lead artist is Dizzy Gillespie.
3. Find all albums in the style of Bop.
4. Find the albums with a total duration of less than 30 minutes long.
2. Find all albums released in the 80s.
5. Find an album by its ID - you'll need to look up its ID first (the `_id` field of a document).

## Update

Corrections: the above data actually had a couple of factual mistakes. Please fix them by updating the entries in the database:

1. Lee Konitz/Bob Brookmeyer in Paris was actually released in 1954.
2. Joao Gilberto is actually spelled with an ã: João Gilberto

## Remove

1. Remove one of the albums by its album name - with a remove statement, and then insert it again.
2. Remove all the album in the 80s - with a remove statement, then insert them again.

## Upsert

You want to insert a new album, but you don't want to accidentally insert a duplicate. Write an update statement with the upsert flag, so that this document will be created if it doesn't already exist, but re-running this statement won't create a duplicate. The new album is:

Album Name: My Foolish Heart: Live at Montreux
Artist: Keith Jarrett
Released: 2001
Duration: 108
Styles:
  * Bop

## Count

1. Get the number of albums in the database in total.
2. Get the number of albums released in the 80s.
