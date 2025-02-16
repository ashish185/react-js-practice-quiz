# Mocking
1. Why Mocking?
- Reduced dependencies required
- Prevent Side Effects during testing.
- Build custom mocks to facilitate desired testing procedures.

2. What is Mocking?
- A convincing duplicate of an object with no internal workings.
- Can be automatically or manually created.
- Has same API as original, but no side-effects.
- Spies and other mock features simplify testing.

3. Mock functions?
- Also known as Spies.
- No side effects
- Count function calls.
- Records arguments passed when called.
- can be loaded with return values
- - Creating mock files
- - - npm mocks are loaded automatically.
- - - Mocks must reside in a __mocks_ folder next to mocked module.
- - - npm and local modules can both be mocked.