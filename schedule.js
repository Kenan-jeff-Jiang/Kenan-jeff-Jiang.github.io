document.addEventListener('DOMContentLoaded', () => {
    const config = window.scheduleConfig;
    const calendarId = config?.calendarId?.trim();
    if (!calendarId) return;

    // Use an explicit time zone so visitors know how to interpret meeting times.
    // Fall back to Eastern Time if a future configuration contains an invalid zone.
    let timeZone = config.timeZone || 'America/New_York';
    try {
        new Intl.DateTimeFormat('en', { timeZone }).format();
    } catch {
        timeZone = 'America/New_York';
    }

    const calendarUrl = new URL('https://calendar.google.com/calendar/embed');
    calendarUrl.search = new URLSearchParams({
        src: calendarId,
        ctz: timeZone,
        mode: 'WEEK',
        showTitle: '0',
        showPrint: '0',
        showCalendars: '0'
    }).toString();

    const calendar = document.querySelector('#availability-calendar');
    calendar.src = calendarUrl.href;

    const calendarLink = document.querySelector('#calendar-link');
    calendarLink.href = calendarUrl.href;
    calendarLink.hidden = false;

    const timeZoneLabel = document.querySelector('#calendar-timezone');
    timeZoneLabel.textContent = `Time zone: ${timeZone}.`;
    timeZoneLabel.hidden = false;

    document.querySelector('#calendar-placeholder').hidden = true;
    document.querySelector('#calendar-container').hidden = false;
    document.querySelector('#calendar-note').hidden = false;
});
