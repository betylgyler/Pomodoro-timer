# 🍅 Pomodoro Timer

Focus for 25 minutes. Get an alarm. Repeat.

I built this small timer to practice JavaScript, and because I actually needed one. As a student who also tutors and teaches, my attention gets pulled in a lot of directions, and the Pomodoro technique helps me stay on one thing at a time.

**👉 [Try it live](https://betylgyler.github.io/Pomodoro-timer/)** <!-- replace with your real link -->

<!-- Add a screenshot: save it as screenshot.png in the repo, then uncomment the line below -->
<!-- ![Pomodoro Timer screenshot](screenshot.png) -->

## What it does

- Counts down from 25:00 with **Start**, **Stop** and **Reset** buttons
- Shows time as `MM:SS`, so 1 minute 3 seconds reads `01:03`, not `1:3`
- Plays an alarm for 6 seconds when time is up, then shows an alert
- Resets itself to 25:00, ready for the next round

It's deliberately simple: one page, no frameworks, no libraries.

## Built with

HTML, CSS (Flexbox for the centered layout) and plain JavaScript.

```
pomodoro-timer/
├── index.html    # the page
├── style.css     # the pastel look
├── scripts.js    # the timer logic
└── alarm.mp4     # the alarm sound
```

## How the timer works

The whole thing runs on one idea: keep a number of seconds (`timeLeft`) and subtract one every second.

- `setInterval` fires every 1000 ms, lowers `timeLeft` and updates the screen
- `Math.floor(timeLeft / 60)` gives the minutes, `timeLeft % 60` gives the leftover seconds
- `padStart(2, "0")` adds the leading zeros
- `clearInterval` is what makes Stop and Reset work
- When `timeLeft` hits 0, the alarm plays and `setTimeout` stops it 6 seconds later

## Things that tripped me up

- **The timer went negative.** After the "Time's up!" alert, the countdown kept going into minus numbers. The fix was to clear the interval first, then reset `timeLeft` and update the display.
- **Formatting the time.** My first version showed `1:5` instead of `01:05`. I learned about `padStart`, and that you have to convert numbers to strings first.
- **Stopping the alarm.** Audio has no "stop" method, only `pause()`. To replay it from the start I also had to set `currentTime = 0`.

## What I want to add next

- [ ] Short and long break modes
- [ ] A counter for completed sessions
- [ ] Custom session length
- [ ] Disable Start while the timer is already running
- [ ] Dark mode

## About me

I'm Betul, a software engineering student at Arcada University of Applied Sciences in Helsinki. I'm working towards a career in full stack development, and I'm looking for an internship. This project is one of the small steps along the way.



If you have feedback or ideas, I'd love to hear them. Open an issue or message me. 💜