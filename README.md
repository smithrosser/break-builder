# Break Builder

This is an ultra-simple React Native app for keeping track of breaks while practicing snooker.

I've always found trying to keep a running total in my head whilst breakbuilding tends to break my concentration, so I just don't -- then I finish a break and have no idea how many points it was. This is an attempt to solve that problem.

### Usage

The scoring process is simplified heavily -- each colour pot assumes a red was potted, so at most you only need to press every other shot. For example:

* _Player pots **red** & **black**_: Press 'Black' button, 8 (1 + 7) points scored.
* _Player pots **red** & **blue**_: Press 'Blue' button, 6 (1 + 5) points scored.
* _Player pots **red** & then misses_: Press 'Red' button, then 'Miss'. 1 points scored, break reset.

I designed it this way to avoid breaking concentration by having to mark down a pot every shot. It's a little confusing but I got used to it pretty quick.

### Roadmap

Need to implement colours clearances (should you get that far).
