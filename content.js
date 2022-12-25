const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

if (!isFirefox)
{
    const style = `<style>
    div[id^='id__'].css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws > div:first-child, 
    .css-1dbjc4n.r-2sztyj.r-1efd50x.r-5kkj8d.r-13awgt0.r-18u37iz.r-tzz3ar.r-s1qlax.r-1yzf0co > div:first-child,
    .r-1h0z5md:has([href$="/analytics"]),
    .r-1yzf0co .css-1dbjc4n:has([href$="/analytics"])
    {
        display: none !important;
    }
    </style>`;

    document.head.insertAdjacentHTML('beforeend', style);
}

if (isFirefox)
{
    const style = `<style>
    div[id^='id__'].css-1dbjc4n.r-1ta3fxp.r-18u37iz.r-1wtj0ep.r-1s2bzr4.r-1mdbhws > div:first-child, .css-1dbjc4n.r-2sztyj.r-1efd50x.r-5kkj8d.r-13awgt0.r-18u37iz.r-tzz3ar.r-s1qlax.r-1yzf0co > div:first-child
    {
        display: none !important;
    }
    </style>`;

    document.head.insertAdjacentHTML('beforeend', style);
}
