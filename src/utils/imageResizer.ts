import ImageResizer from '@bam.tech/react-native-image-resizer';

const imageResizer = (option: any) =>
  new Promise(async (result, reject) => {
    const { uri, data, label } = option;

    try {
      const resize = await ImageResizer.createResizedImage(
        uri, // path
        1000, // maxwidth
        1000, // maxheight
        'PNG', // compress format
        100, // quality
        0, // rotation
        undefined, // outputhpath
        false, // keep meta
        data
      );

      if (resize.size > 1000000) {
        const nextResize = await ImageResizer.createResizedImage(
          uri, // path
          800, // maxwidth
          800, // maxheight
          'PNG', // compress format
          100, // quality
          0, // rotation
          undefined, // outputhpath
          false, // keep meta
          data
        );

        if (data === undefined) {
          result(nextResize);
        } else {
          const extract = /(?:\.([^.]+))?$/;

          // @ts-expect-error TS(2531) FIXME: Object is possibly 'null'.
          const extensionFile = extract.exec(nextResize.name)[1] || 'png';
          const fileName = `${label}.${extensionFile}`.toLowerCase();

          // @ts-expect-error TS(2531) FIXME: Object is possibly 'null'.
          const extensionFileOld = extract.exec(fileName)[1];
          const newFileName = fileName.replace(
            `${extensionFileOld}`,
            extensionFile
          );

          const fileSize = nextResize.size / 1000000;
          const dataResize = {
            fileSize: fileSize.toFixed(2),
            height: nextResize.height,
            originalFileName: newFileName,
            type: data.type,
            uri: nextResize.uri,
            width: nextResize.width,
          };
          result(dataResize);
        }
      } else {
        if (data === undefined) {
          result(resize);
        } else {
          const extract = /(?:\.([^.]+))?$/;

          // @ts-expect-error TS(2531) FIXME: Object is possibly 'null'.
          const extensionFile = extract.exec(resize.name)[1] || 'png';
          const fileName = `${label}.${extensionFile}`.toLowerCase();

          // @ts-expect-error TS(2531) FIXME: Object is possibly 'null'.
          const extensionFileOld = extract.exec(fileName)[1];
          const newFileName = fileName.replace(
            `${extensionFileOld}`,
            extensionFile
          );

          const fileSize = resize.size / 1000000;
          const dataResize = {
            fileSize: fileSize.toFixed(2),
            height: resize.height,
            originalFileName: newFileName,
            type: data.type,
            uri: resize.uri,
            width: resize.width,
          };
          result(dataResize);
        }
      }
    } catch (err) {
      reject(err);
    }

    console.log('data', data);
  });

export default imageResizer;
