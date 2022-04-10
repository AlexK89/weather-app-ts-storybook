
## Notes:

1. Your setup won't run, I had some conflicts in versions so I did my setup.
2. I don't have much experience with Storybook, used it a little a few years ago, but created for 2 components.
3. I'm working with React testing lib for a few years, but didn't write a lot of test here due to lack of time.
4. I was working with Material UI library for 3 years, didn't use it here as there was no need.

## Improvements:

1. I would split SearchForm into 2 more components LazyInput.
2. Add LocationSearchForm abstraction so we can move onChange state and fetching list of locations from SearchForm.
3. Browser support testing.
4. Full types for weather response.
5. Add switcher for UnitsSystem system.
6. Add FormattedMessages lib for numbers formating.
7. Once complexity grow, Context can be introduced.
8. Icons can be nicer from the other library.