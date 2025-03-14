export const DumpPre = (data: unknown) => {
    return (<pre>{JSON.stringify(data, null, "  ") ?? ""}</pre>)
 }
