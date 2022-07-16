import { Parser } from 'json2csv';


// Export to csv
adminDashboardRouter.get("/export-report", checkAuth, async (req, res, next) => {
    try {
      const reporData: any = await productService.GetReport();
      const transit: any = await transactionService.GetTransaction();
    if (transit && reporData) {
      const productsLength = reporData.length;
      const transitLength = transit.length;
      for (let i = 0; i < productsLength; i++) {
        const d = new Date(reporData[i]?.purchaseDate);
        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
        const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
        const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
        reporData[i].status = reporData[i].status.toUpperCase();
        reporData[i].purchaseDate = `${da}-${mo}-${ye}`;
        for (let j = 0; j < transitLength; j++) {
          if (
            reporData[i]._id.toString() === transit[j].productId.toString() &&
            transit[j].status === "1"
          ) {
            reporData[i].status = transit[j].ticketNumber;
          }
        }
      }
    }
    if (reporData) {
      const fields = [
        {
          label: 'Asset Type',
          value: 'assetType.name'
        },
        {
          label: 'Asset',
          value: 'asset.name'
        },
        {
         label: 'Description',
          value: 'description'
        },
        {
          label: 'Purchase Date',
          value: 'purchaseDate'
        },
        {
          label: 'Invoice Number',
          value: 'invoiceNumber'
        },
        {
         label: 'Purchase Value',
          value: 'price'
        },
        {
          label: 'Vendor',
          value: 'vendorName'
        },
        {
         label: 'Location/Status',
          value: `status`,
        }
      ];
        const json2csv = new Parser({ fields });
        const csv = json2csv.parse(reporData);
        res.header('Content-Type', 'text/csv');
        res.attachment('bc-asset-report.csv');
        return res.send(csv);
    } else {
      res.render("pages/report_page.ejs");
    }}catch (error) {
      console.log("Error in route.admin.dashboard of report route");
    }
  });