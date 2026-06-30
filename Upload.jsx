export default function Upload() {

    async function upload(e) {

        e.preventDefault();

        const file = e.target.htmlfile.files[0];
        const content = await file.text();

        const response = await fetch(
            "https://l2krdj989f.execute-api.us-east-1.amazonaws.com/upload",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    filename: file.name,
                    content: content
                })
            }
        );

        const result = await response.json();

        if (response.ok) {
            alert(result.message);
        } else {
            alert(result.error || result.message || "Upload Failed");
        }
    }

    return (
        <div>

            <h1>Upload HTML File</h1>

            <form onSubmit={upload}>

                <input
                    type="file"
                    name="htmlfile"
                    accept=".html"
                    required
                />

                <br />
                <br />

                <button type="submit">
                    Upload HTML
                </button>

            </form>

        </div>
    );
}
