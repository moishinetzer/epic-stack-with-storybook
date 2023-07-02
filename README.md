# Epic Stack Example with Storybook

This demonstrates how to integrate Storybook with the Epic Stack. The easiest
way to explore this is to check the commit history to see what changed from the
`init` commit.

Take note that the only remix-specific storybook file is in the following
location: `stories/GeneralErrorBoundary.stories.tsx`

It's very powerful to be able to create remix-specific components and still be
able to use them in Storybook with the same props and functionality.

A follow on to this would be to add the chromatic addon to Storybook and add it
to the CI/CD pipeline.
