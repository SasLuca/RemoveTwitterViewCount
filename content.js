var observer = new MutationObserver(function (mutations) 
{
    // Remove view counters on tweets in timeline
    {
        var elementsToRemove = []
        var elements = document.getElementsByClassName("css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1777fci r-bt1l66 r-1ny4l3l r-bztko3 r-lrvibr")
        for (var i = 0, len = elements.length; i < len; i++) elementsToRemove.push(elements[i])
        
        // Must go up one node and remove that
        elementsToRemove.forEach(it => it.parentNode.parentNode.removeChild(it.parentNode))
    }

    // Remove view counters on tweet page
    {
        const viewCounterOnTweetPage = "//a[contains(@href, 'analytics')]"
        removeElementsByXPath(viewCounterOnTweetPage)
    }

    // Remove "View tweet analytics" on your tweet page
    {
        removeElementsByXPath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/section/div/div/div[4]/div/div/div[1]/article/div/div/div/div[3]/div[7]")
    }
})

observer.observe(document.body, { 
    attributes: true,
    childList: true,
    subtree: true,
    characterData: true
})

function removeAllThatMatch(matcher)
{
    var elementsToRemove = []
    var elements = document.getElementsByClassName(matcher)
    for (var i = 0, len = elements.length; i < len; i++) {
        elementsToRemove.push(elements[i])
    }

    elementsToRemove.forEach(it => it.parentNode.removeChild(it))
}

function removeElementsByXPath(xpath)
{
    let results = [];
    let query = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) 
    {
        results.push(query.snapshotItem(i));
    }
    results.forEach(it => it.parentNode.removeChild(it))
}

function getElementsByXPath(xpath)
{
    let results = [];
    let query = document.evaluate(xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0, length = query.snapshotLength; i < length; ++i) 
    {
        results.push(query.snapshotItem(i));
    }
    return results
}