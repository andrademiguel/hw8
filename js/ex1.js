fetch(
    "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
)
    .then(response => response.json())
    .then(fpaintings => {
        const paint = document.getElementById("paintings");
        fpaintings.forEach(painting => {
            const fPaint = document.createElement("tr");
            fPaint.innerHTML = `<td>
        ${painting.name}
        </td>
        <td>
        ${painting.year}
        </td>
        <td>
        ${painting.artist}
        </td>`;
            paint.appendChild(fPaint);
        });
    })
    .catch(err => {
        console.error(err.message);
    });

// [
//     {
//         "name": "The Starry Night",
//         "year": "1889",
//         "artist": "Vincent Van Gogh"
//     },
//     {
//         "name": "The Scream",
//         "year": "1893",
//         "artist": "Edvard Munch"
//     },
//     {
//         "name": "Guernica",
//         "year": "1937",
//         "artist": "Pablo Picasso"
//     }
// ]
